// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalBoldSvg from '@ant-design/icons-svg/lib/asn/GlobalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalBold: GlobalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalBoldSvg}></AntdIcon>;
};

GlobalBold.displayName = 'GlobalBold';
GlobalBold.inheritAttrs = false;
export default GlobalBold;