// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreativeCommonsBrokenSvg from '@ant-design/icons-svg/lib/asn/CreativeCommonsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreativeCommonsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreativeCommonsBroken: CreativeCommonsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreativeCommonsBrokenSvg}></AntdIcon>;
};

CreativeCommonsBroken.displayName = 'CreativeCommonsBroken';
CreativeCommonsBroken.inheritAttrs = false;
export default CreativeCommonsBroken;