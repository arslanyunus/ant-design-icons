// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEraserOutlineSvg from '@ant-design/icons-svg/lib/asn/GridEraserOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEraserOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEraserOutline: GridEraserOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEraserOutlineSvg}></AntdIcon>;
};

GridEraserOutline.displayName = 'GridEraserOutline';
GridEraserOutline.inheritAttrs = false;
export default GridEraserOutline;