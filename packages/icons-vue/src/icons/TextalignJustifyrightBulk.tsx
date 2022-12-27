// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyrightBulkSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyrightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyrightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyrightBulk: TextalignJustifyrightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyrightBulkSvg}></AntdIcon>;
};

TextalignJustifyrightBulk.displayName = 'TextalignJustifyrightBulk';
TextalignJustifyrightBulk.inheritAttrs = false;
export default TextalignJustifyrightBulk;