// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward10SecondsOutlineSvg from '@ant-design/icons-svg/lib/asn/Forward10SecondsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward10SecondsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward10SecondsOutline: Forward10SecondsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward10SecondsOutlineSvg}></AntdIcon>;
};

Forward10SecondsOutline.displayName = 'Forward10SecondsOutline';
Forward10SecondsOutline.inheritAttrs = false;
export default Forward10SecondsOutline;