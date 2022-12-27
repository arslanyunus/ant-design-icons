// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/GlobalSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalSearchOutline: GlobalSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalSearchOutlineSvg}></AntdIcon>;
};

GlobalSearchOutline.displayName = 'GlobalSearchOutline';
GlobalSearchOutline.inheritAttrs = false;
export default GlobalSearchOutline;