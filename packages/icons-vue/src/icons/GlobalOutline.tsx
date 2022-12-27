// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalOutlineSvg from '@ant-design/icons-svg/lib/asn/GlobalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalOutline: GlobalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalOutlineSvg}></AntdIcon>;
};

GlobalOutline.displayName = 'GlobalOutline';
GlobalOutline.inheritAttrs = false;
export default GlobalOutline;