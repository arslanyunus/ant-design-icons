// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Buildings2BulkSvg from '@ant-design/icons-svg/lib/asn/Buildings2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Buildings2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Buildings2Bulk: Buildings2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Buildings2BulkSvg}></AntdIcon>;
};

Buildings2Bulk.displayName = 'Buildings2Bulk';
Buildings2Bulk.inheritAttrs = false;
export default Buildings2Bulk;