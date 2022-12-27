// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignRightBulkSvg from '@ant-design/icons-svg/lib/asn/TextalignRightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignRightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignRightBulk: TextalignRightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignRightBulkSvg}></AntdIcon>;
};

TextalignRightBulk.displayName = 'TextalignRightBulk';
TextalignRightBulk.inheritAttrs = false;
export default TextalignRightBulk;