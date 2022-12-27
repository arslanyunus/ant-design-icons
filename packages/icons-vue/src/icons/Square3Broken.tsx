// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3BrokenSvg from '@ant-design/icons-svg/lib/asn/Square3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3Broken: Square3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3BrokenSvg}></AntdIcon>;
};

Square3Broken.displayName = 'Square3Broken';
Square3Broken.inheritAttrs = false;
export default Square3Broken;