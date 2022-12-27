// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreSquareBoldSvg from '@ant-design/icons-svg/lib/asn/MoreSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreSquareBold: MoreSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreSquareBoldSvg}></AntdIcon>;
};

MoreSquareBold.displayName = 'MoreSquareBold';
MoreSquareBold.inheritAttrs = false;
export default MoreSquareBold;