// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GeminiLinearSvg from '@ant-design/icons-svg/lib/asn/GeminiLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GeminiLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GeminiLinear: GeminiLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GeminiLinearSvg}></AntdIcon>;
};

GeminiLinear.displayName = 'GeminiLinear';
GeminiLinear.inheritAttrs = false;
export default GeminiLinear;