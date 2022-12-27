// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LanguageCircleBulkSvg from '@ant-design/icons-svg/lib/asn/LanguageCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LanguageCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LanguageCircleBulk: LanguageCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LanguageCircleBulkSvg}></AntdIcon>;
};

LanguageCircleBulk.displayName = 'LanguageCircleBulk';
LanguageCircleBulk.inheritAttrs = false;
export default LanguageCircleBulk;