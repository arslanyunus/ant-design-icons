// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward15SecondsOutlineSvg from '@ant-design/icons-svg/lib/asn/Forward15SecondsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward15SecondsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward15SecondsOutline: Forward15SecondsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward15SecondsOutlineSvg}></AntdIcon>;
};

Forward15SecondsOutline.displayName = 'Forward15SecondsOutline';
Forward15SecondsOutline.inheritAttrs = false;
export default Forward15SecondsOutline;