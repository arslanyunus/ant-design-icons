// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeBoldSvg from '@ant-design/icons-svg/lib/asn/EyeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeBold: EyeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeBoldSvg}></AntdIcon>;
};

EyeBold.displayName = 'EyeBold';
EyeBold.inheritAttrs = false;
export default EyeBold;