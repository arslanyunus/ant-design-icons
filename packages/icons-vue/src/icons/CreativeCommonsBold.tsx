// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreativeCommonsBoldSvg from '@ant-design/icons-svg/lib/asn/CreativeCommonsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreativeCommonsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreativeCommonsBold: CreativeCommonsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreativeCommonsBoldSvg}></AntdIcon>;
};

CreativeCommonsBold.displayName = 'CreativeCommonsBold';
CreativeCommonsBold.inheritAttrs = false;
export default CreativeCommonsBold;