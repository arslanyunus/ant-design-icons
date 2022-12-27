// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WomanBoldSvg from '@ant-design/icons-svg/lib/asn/WomanBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WomanBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WomanBold: WomanBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomanBoldSvg}></AntdIcon>;
};

WomanBold.displayName = 'WomanBold';
WomanBold.inheritAttrs = false;
export default WomanBold;