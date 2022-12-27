// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PharagraphspacingBulkSvg from '@ant-design/icons-svg/lib/asn/PharagraphspacingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PharagraphspacingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PharagraphspacingBulk: PharagraphspacingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PharagraphspacingBulkSvg}></AntdIcon>;
};

PharagraphspacingBulk.displayName = 'PharagraphspacingBulk';
PharagraphspacingBulk.inheritAttrs = false;
export default PharagraphspacingBulk;