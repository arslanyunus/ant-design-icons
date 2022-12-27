// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3DBrokenSvg from '@ant-design/icons-svg/lib/asn/Square3DBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3DBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3DBroken: Square3DBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3DBrokenSvg}></AntdIcon>;
};

Square3DBroken.displayName = 'Square3DBroken';
Square3DBroken.inheritAttrs = false;
export default Square3DBroken;