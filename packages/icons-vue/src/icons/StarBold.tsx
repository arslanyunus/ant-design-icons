// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarBoldSvg from '@ant-design/icons-svg/lib/asn/StarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarBold: StarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarBoldSvg}></AntdIcon>;
};

StarBold.displayName = 'StarBold';
StarBold.inheritAttrs = false;
export default StarBold;