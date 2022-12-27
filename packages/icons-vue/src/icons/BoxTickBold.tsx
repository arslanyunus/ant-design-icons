// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTickBoldSvg from '@ant-design/icons-svg/lib/asn/BoxTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTickBold: BoxTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTickBoldSvg}></AntdIcon>;
};

BoxTickBold.displayName = 'BoxTickBold';
BoxTickBold.inheritAttrs = false;
export default BoxTickBold;