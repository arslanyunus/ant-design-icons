// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame3BulkSvg from '@ant-design/icons-svg/lib/asn/Frame3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame3Bulk: Frame3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame3BulkSvg}></AntdIcon>;
};

Frame3Bulk.displayName = 'Frame3Bulk';
Frame3Bulk.inheritAttrs = false;
export default Frame3Bulk;