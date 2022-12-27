// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame2BulkSvg from '@ant-design/icons-svg/lib/asn/Frame2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame2Bulk: Frame2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame2BulkSvg}></AntdIcon>;
};

Frame2Bulk.displayName = 'Frame2Bulk';
Frame2Bulk.inheritAttrs = false;
export default Frame2Bulk;