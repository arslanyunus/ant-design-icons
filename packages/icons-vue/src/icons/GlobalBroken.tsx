// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalBrokenSvg from '@ant-design/icons-svg/lib/asn/GlobalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalBroken: GlobalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalBrokenSvg}></AntdIcon>;
};

GlobalBroken.displayName = 'GlobalBroken';
GlobalBroken.inheritAttrs = false;
export default GlobalBroken;