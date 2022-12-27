// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeySquareBulkSvg from '@ant-design/icons-svg/lib/asn/KeySquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeySquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeySquareBulk: KeySquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeySquareBulkSvg}></AntdIcon>;
};

KeySquareBulk.displayName = 'KeySquareBulk';
KeySquareBulk.inheritAttrs = false;
export default KeySquareBulk;