// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box1BulkSvg from '@ant-design/icons-svg/lib/asn/Box1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box1Bulk: Box1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box1BulkSvg}></AntdIcon>;
};

Box1Bulk.displayName = 'Box1Bulk';
Box1Bulk.inheritAttrs = false;
export default Box1Bulk;