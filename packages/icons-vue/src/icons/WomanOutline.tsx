// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WomanOutlineSvg from '@ant-design/icons-svg/lib/asn/WomanOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WomanOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WomanOutline: WomanOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomanOutlineSvg}></AntdIcon>;
};

WomanOutline.displayName = 'WomanOutline';
WomanOutline.inheritAttrs = false;
export default WomanOutline;