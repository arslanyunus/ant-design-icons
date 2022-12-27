// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/BackSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackSquareBroken: BackSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackSquareBrokenSvg}></AntdIcon>;
};

BackSquareBroken.displayName = 'BackSquareBroken';
BackSquareBroken.inheritAttrs = false;
export default BackSquareBroken;