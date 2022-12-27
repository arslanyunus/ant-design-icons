// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalRefreshOutlineSvg from '@ant-design/icons-svg/lib/asn/GlobalRefreshOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalRefreshOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalRefreshOutline: GlobalRefreshOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalRefreshOutlineSvg}></AntdIcon>;
};

GlobalRefreshOutline.displayName = 'GlobalRefreshOutline';
GlobalRefreshOutline.inheritAttrs = false;
export default GlobalRefreshOutline;