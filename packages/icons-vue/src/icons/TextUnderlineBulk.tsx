// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextUnderlineBulkSvg from '@ant-design/icons-svg/lib/asn/TextUnderlineBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextUnderlineBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextUnderlineBulk: TextUnderlineBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextUnderlineBulkSvg}></AntdIcon>;
};

TextUnderlineBulk.displayName = 'TextUnderlineBulk';
TextUnderlineBulk.inheritAttrs = false;
export default TextUnderlineBulk;