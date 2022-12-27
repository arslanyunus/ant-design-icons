// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/LanguageCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageCircleOutline: LanguageCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageCircleOutlineSvg}></AntdIcon>;
};

LanguageCircleOutline.displayName = 'LanguageCircleOutline';
LanguageCircleOutline.inheritAttrs = false;
export default LanguageCircleOutline;