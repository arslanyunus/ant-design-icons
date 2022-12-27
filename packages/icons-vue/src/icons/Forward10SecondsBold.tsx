// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward10SecondsBoldSvg from '@ant-design/icons-svg/lib/asn/Forward10SecondsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward10SecondsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward10SecondsBold: Forward10SecondsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward10SecondsBoldSvg}></AntdIcon>;
};

Forward10SecondsBold.displayName = 'Forward10SecondsBold';
Forward10SecondsBold.inheritAttrs = false;
export default Forward10SecondsBold;