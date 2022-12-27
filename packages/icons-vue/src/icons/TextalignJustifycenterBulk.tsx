// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifycenterBulkSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifycenterBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifycenterBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifycenterBulk: TextalignJustifycenterBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifycenterBulkSvg}></AntdIcon>;
};

TextalignJustifycenterBulk.displayName = 'TextalignJustifycenterBulk';
TextalignJustifycenterBulk.inheritAttrs = false;
export default TextalignJustifycenterBulk;