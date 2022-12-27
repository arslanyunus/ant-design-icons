// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalRefreshBrokenSvg from '@ant-design/icons-svg/lib/asn/GlobalRefreshBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalRefreshBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalRefreshBroken: GlobalRefreshBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalRefreshBrokenSvg}></AntdIcon>;
};

GlobalRefreshBroken.displayName = 'GlobalRefreshBroken';
GlobalRefreshBroken.inheritAttrs = false;
export default GlobalRefreshBroken;