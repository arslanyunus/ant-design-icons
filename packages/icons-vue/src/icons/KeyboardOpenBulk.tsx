// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardOpenBulkSvg from '@ant-design/icons-svg/lib/asn/KeyboardOpenBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardOpenBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardOpenBulk: KeyboardOpenBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardOpenBulkSvg}></AntdIcon>;
};

KeyboardOpenBulk.displayName = 'KeyboardOpenBulk';
KeyboardOpenBulk.inheritAttrs = false;
export default KeyboardOpenBulk;