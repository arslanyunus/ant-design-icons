// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatCircleBulkSvg from '@ant-design/icons-svg/lib/asn/FormatCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatCircleBulk: FormatCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatCircleBulkSvg}></AntdIcon>;
};

FormatCircleBulk.displayName = 'FormatCircleBulk';
FormatCircleBulk.inheritAttrs = false;
export default FormatCircleBulk;