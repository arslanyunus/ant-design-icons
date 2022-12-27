// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseSquareBoldSvg from '@ant-design/icons-svg/lib/asn/CloseSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseSquareBold: CloseSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseSquareBoldSvg}></AntdIcon>;
};

CloseSquareBold.displayName = 'CloseSquareBold';
CloseSquareBold.inheritAttrs = false;
export default CloseSquareBold;