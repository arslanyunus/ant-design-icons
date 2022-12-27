// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Rotate3DBrokenSvg from '@ant-design/icons-svg/lib/asn/Rotate3DBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Rotate3DBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Rotate3DBroken: Rotate3DBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Rotate3DBrokenSvg}></AntdIcon>;
};

Rotate3DBroken.displayName = 'Rotate3DBroken';
Rotate3DBroken.inheritAttrs = false;
export default Rotate3DBroken;