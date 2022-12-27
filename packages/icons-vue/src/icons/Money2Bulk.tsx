// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money2BulkSvg from '@ant-design/icons-svg/lib/asn/Money2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money2Bulk: Money2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money2BulkSvg}></AntdIcon>;
};

Money2Bulk.displayName = 'Money2Bulk';
Money2Bulk.inheritAttrs = false;
export default Money2Bulk;