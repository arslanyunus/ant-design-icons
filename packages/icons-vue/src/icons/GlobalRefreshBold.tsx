// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalRefreshBoldSvg from '@ant-design/icons-svg/lib/asn/GlobalRefreshBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalRefreshBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalRefreshBold: GlobalRefreshBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalRefreshBoldSvg}></AntdIcon>;
};

GlobalRefreshBold.displayName = 'GlobalRefreshBold';
GlobalRefreshBold.inheritAttrs = false;
export default GlobalRefreshBold;