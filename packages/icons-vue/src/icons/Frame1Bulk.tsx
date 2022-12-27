// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame1BulkSvg from '@ant-design/icons-svg/lib/asn/Frame1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame1Bulk: Frame1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame1BulkSvg}></AntdIcon>;
};

Frame1Bulk.displayName = 'Frame1Bulk';
Frame1Bulk.inheritAttrs = false;
export default Frame1Bulk;