// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageSquareBulkSvg from '@ant-design/icons-svg/lib/asn/LanguageSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageSquareBulk: LanguageSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageSquareBulkSvg}></AntdIcon>;
};

LanguageSquareBulk.displayName = 'LanguageSquareBulk';
LanguageSquareBulk.inheritAttrs = false;
export default LanguageSquareBulk;