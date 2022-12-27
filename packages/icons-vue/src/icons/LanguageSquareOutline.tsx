// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/LanguageSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageSquareOutline: LanguageSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageSquareOutlineSvg}></AntdIcon>;
};

LanguageSquareOutline.displayName = 'LanguageSquareOutline';
LanguageSquareOutline.inheritAttrs = false;
export default LanguageSquareOutline;