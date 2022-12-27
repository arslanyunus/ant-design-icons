// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3LinearSvg from '@ant-design/icons-svg/lib/asn/Square3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3Linear: Square3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3LinearSvg}></AntdIcon>;
};

Square3Linear.displayName = 'Square3Linear';
Square3Linear.inheritAttrs = false;
export default Square3Linear;