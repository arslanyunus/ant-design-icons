// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize1LinearSvg from '@ant-design/icons-svg/lib/asn/Maximize1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize1Linear: Maximize1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize1LinearSvg}></AntdIcon>;
};

Maximize1Linear.displayName = 'Maximize1Linear';
Maximize1Linear.inheritAttrs = false;
export default Maximize1Linear;