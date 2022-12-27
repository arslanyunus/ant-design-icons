// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame4BulkSvg from '@ant-design/icons-svg/lib/asn/Frame4Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame4BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame4Bulk: Frame4BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame4BulkSvg}></AntdIcon>;
};

Frame4Bulk.displayName = 'Frame4Bulk';
Frame4Bulk.inheritAttrs = false;
export default Frame4Bulk;