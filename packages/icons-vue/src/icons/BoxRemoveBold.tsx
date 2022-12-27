// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/BoxRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxRemoveBold: BoxRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxRemoveBoldSvg}></AntdIcon>;
};

BoxRemoveBold.displayName = 'BoxRemoveBold';
BoxRemoveBold.inheritAttrs = false;
export default BoxRemoveBold;