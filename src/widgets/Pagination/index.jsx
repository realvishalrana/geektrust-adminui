import InputField from "components/Common/InputField";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { DEFAULT_PAGE_LIMIT, PAGE_DATA_LIMIT, PAGE_LIMIT } from "utils/constant";
import { scrollToTop } from "utils/helper";
import Button from "widgets/Button";

const Pagination = ({ page = DEFAULT_PAGE_LIMIT, limit = PAGE_DATA_LIMIT, totalPages, onPaginationChange, show = true }) => {

  const [pageLimit, setPagelimit] = useState(limit);

  const gotoPreviousPage = React.useCallback(() => {
    if (page !== 1) {
      onPaginationChange(page - 1, limit);
      scrollToTop()
    }
  }, [page, limit]);

  const gotoNextPage = React.useCallback(() => {
    if (page !== totalPages) {
      onPaginationChange(page + 1, limit);
      scrollToTop()
    }
  }, [page, limit, totalPages]);

  const handleLimitChange = React.useCallback(
    (event) => {
      onPaginationChange(DEFAULT_PAGE_LIMIT, Number(event.target.value));
      setPagelimit(event.target.value)
    },
    [page, limit, totalPages]
  );

  const debounced = useDebouncedCallback((input) => {
    onPaginationChange(input, limit);
  }, 1000);

  const goToPage = (event) => {
    event.target.value = event.target.value.replaceAll(/\D/gi, "");
    if (
      event.target.value &&
      event.target.value > 0 &&
      event.target.value <= totalPages
    ) {
      debounced(event.target.value);
    }
  };

  return (
    <>
      {show && totalPages > 0 &&
        <div className="flex items-center justify-between py-3 pagination flex-wrap lg:flex-nowrap">
          <div className="flex items-center gap-3 text-xs">
            <select
              value={pageLimit}
              className="px-2 py-2 space-x-4 text-sm bg-transparent border rounded-md outline-none h-11 border-primary-border"
              onChange={handleLimitChange}
            >
              {PAGE_LIMIT.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {" "}{pageSize}
                </option>
              ))}
            </select>
            <span className="text-sm">Records per page</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <Button
              text='Previous'
              className='hidden sm:!flex md:w-24 md:h-11 flex-cen cursor-pointer focus:ring-0'
              onClick={gotoPreviousPage}
              type="btnFill"
              disabled={page === 1}
            />
            <Button
              text='<'
              className='sm:!hidden flex-cen cursor-pointer focus:ring-0 !px-3 !py-1'
              onClick={gotoPreviousPage}
              type="btnFill"
              disabled={page === 1}
            />
            <div className="flex items-center gap-1 text-sm">
              Page
              <InputField
                className="!w-11 h-11k text-black font-medium"
                onChange={(event) => goToPage(event)}
                value={page}
              />
              of
            </div>
            <span className="text-sm text-black font-medium">{totalPages}</span>
            <Button
              text='Next'
              className='hidden sm:!flex md:w-24 md:h-11 flex-cen cursor-pointer focus:ring-0'
              type='btnFill'
              onClick={gotoNextPage}
              disabled={page === totalPages}
            />
            <Button
              text='>'
              className='sm:!hidden flex-cen cursor-pointer focus:ring-0 !px-3 !py-1'
              type='btnFill'
              onClick={gotoNextPage}
              disabled={page === totalPages}
            />
          </div>
        </div>
      }
    </>
  );
};

export default Pagination;
