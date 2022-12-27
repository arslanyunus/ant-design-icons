// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarBrokenSvg from '@ant-design/icons-svg/lib/asn/StarBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarBroken: StarBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarBrokenSvg}></AntdIcon>;
};

StarBroken.displayName = 'StarBroken';
StarBroken.inheritAttrs = false;
export default StarBroken;