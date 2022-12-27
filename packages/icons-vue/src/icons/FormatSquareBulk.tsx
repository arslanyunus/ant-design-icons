// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatSquareBulkSvg from '@ant-design/icons-svg/lib/asn/FormatSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatSquareBulk: FormatSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatSquareBulkSvg}></AntdIcon>;
};

FormatSquareBulk.displayName = 'FormatSquareBulk';
FormatSquareBulk.inheritAttrs = false;
export default FormatSquareBulk;