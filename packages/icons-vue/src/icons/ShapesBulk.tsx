// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShapesBulkSvg from '@ant-design/icons-svg/lib/asn/ShapesBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShapesBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShapesBulk: ShapesBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShapesBulkSvg}></AntdIcon>;
};

ShapesBulk.displayName = 'ShapesBulk';
ShapesBulk.inheritAttrs = false;
export default ShapesBulk;