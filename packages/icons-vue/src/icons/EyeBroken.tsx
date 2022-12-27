// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeBrokenSvg from '@ant-design/icons-svg/lib/asn/EyeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeBroken: EyeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeBrokenSvg}></AntdIcon>;
};

EyeBroken.displayName = 'EyeBroken';
EyeBroken.inheritAttrs = false;
export default EyeBroken;