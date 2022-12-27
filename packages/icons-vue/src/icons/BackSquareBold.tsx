// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackSquareBoldSvg from '@ant-design/icons-svg/lib/asn/BackSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackSquareBold: BackSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackSquareBoldSvg}></AntdIcon>;
};

BackSquareBold.displayName = 'BackSquareBold';
BackSquareBold.inheritAttrs = false;
export default BackSquareBold;